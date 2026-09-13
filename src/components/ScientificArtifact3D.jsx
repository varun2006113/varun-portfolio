import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ScientificArtifact3D = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 340;
    let height = container.clientHeight || 340;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 16;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group holding the 3D molecular lattice
    const moleculeGroup = new THREE.Group();

    // Node Geometries & Materials
    const nodeGeometry = new THREE.SphereGeometry(0.38, 16, 16);
    
    const tealMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f766e,
      roughness: 0.2,
      metalness: 0.3,
      transparent: true,
      opacity: 0.9
    });

    const skyMaterial = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 0.85
    });

    const highlightMaterial = new THREE.MeshStandardMaterial({
      color: 0x0d9488,
      emissive: 0x14b8a6,
      emissiveIntensity: 0.6,
      roughness: 0.1
    });

    // Generate Icosahedron lattice points
    const icoGeo = new THREE.IcosahedronGeometry(4.2, 1);
    const posAttribute = icoGeo.getAttribute('position');
    const points = [];
    const nodeMeshes = [];

    for (let i = 0; i < posAttribute.count; i++) {
      const x = posAttribute.getX(i);
      const y = posAttribute.getY(i);
      const z = posAttribute.getZ(i);
      const pt = new THREE.Vector3(x, y, z);
      points.push(pt);

      const sphere = new THREE.Mesh(nodeGeometry, i % 2 === 0 ? tealMaterial : skyMaterial);
      sphere.position.set(x, y, z);
      sphere.userData = { originalMaterial: sphere.material, baseScale: 1 };
      moleculeGroup.add(sphere);
      nodeMeshes.push(sphere);
    }

    // Connecting bond lines
    const bondMaterial = new THREE.LineBasicMaterial({
      color: 0x78716c,
      transparent: true,
      opacity: 0.4
    });

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < 4.0) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([points[i], points[j]]);
          const line = new THREE.Line(lineGeo, bondMaterial);
          moleculeGroup.add(line);
        }
      }
    }

    scene.add(moleculeGroup);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x0f766e, 1.8);
    dirLight.position.set(12, 12, 12);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x0284c7, 1.2);
    pointLight.position.set(-12, -12, -8);
    scene.add(pointLight);

    // Interactive Drag & Hover State
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const getNormalizedMouse = (e) => {
      const rect = container.getBoundingClientRect();
      return {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1
      };
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e) => {
      const norm = getNormalizedMouse(e);
      mouseVector.x = norm.x;
      mouseVector.y = norm.y;

      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX += deltaY * 0.008;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        // Subtle tilt towards pointer when not dragging
        targetRotationY += norm.x * 0.001;
        targetRotationX += norm.y * 0.001;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      // Continuous slow rotation + smooth drag interpolation
      moleculeGroup.rotation.y += 0.003 + (targetRotationY - moleculeGroup.rotation.y) * 0.1;
      moleculeGroup.rotation.x += (targetRotationX - moleculeGroup.rotation.x) * 0.1;

      // Raycasting for node hover highlights
      raycaster.setFromCamera(mouseVector, camera);
      const intersects = raycaster.intersectObjects(nodeMeshes);

      nodeMeshes.forEach((mesh) => {
        mesh.material = mesh.userData.originalMaterial;
        mesh.scale.set(1, 1, 1);
      });

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        hit.material = highlightMaterial;
        hit.scale.set(1.4, 1.4, 1.4);
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      domEl.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-80 sm:h-96 relative flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      aria-label="Interactive 3D Molecular Structure (Drag to rotate)"
    />
  );
};

export default ScientificArtifact3D;
