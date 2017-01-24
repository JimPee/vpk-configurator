import * as THREE from 'three';

var container, stats;
var camera, scene, renderer, ambient;
var cube, plane;
var targetRotation = 0;
var targetRotationOnMouseDown = 0;
var mouseX = 0;
var mouseXOnMouseDown = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var cameraMoveIntensity = 0.5;

export function init() {
  // Get canvas
  var canvas = document.getElementById('preview');

  // Set Renderer
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setClearColor( 0xffffff );
  renderer.setPixelRatio( 150 );
  renderer.setSize( 500, 500 );

  camera = new THREE.PerspectiveCamera( 70, 1, 200, 900 );
  scene = new THREE.Scene();

  // Light
  var light = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(light);

  var light1 = new THREE.PointLight(0xffffff, 0.5);
  scene.add(light1);

  // Cube
  var geometry = new THREE.BoxGeometry( 250, 30, 250 );
  for (var i = 0; i < geometry.faces.length; i += 2) {
    if (i === 8) {
      geometry.faces[i].color.setHex(0xB19275);
      geometry.faces[i + 1].color.setHex(0xB19275);
    } else if (i === 4) {
      geometry.faces[i].color.setHex(0xD4B484);
      geometry.faces[i + 1].color.setHex(0xD4B484);
    } else {
      geometry.faces[i].color.setHex(0xDFC298);
      geometry.faces[i + 1].color.setHex(0xDFC298);
    }
  }
  var material = new THREE.MeshLambertMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
  cube = new THREE.Mesh( geometry, material );
  cube.castShadow = true;
  cube.rotation.x = 20 * (Math.PI / 180);
  cube.rotation.y = -35 * (Math.PI / 180);
  cube.position.z = -500;
  scene.add( cube );

  renderer.render( scene, camera );

  // requestAnimationFrame(render);
  // function render() {
  //   renderer.render( scene, camera );
  //   requestAnimationFrame(render);
  // }

  // Plane
  // var geometry = new THREE.PlaneBufferGeometry( 200, 200 );
  // geometry.rotateX( - Math.PI / 2 );
  // var material = new THREE.MeshBasicMaterial( { color: 0xe0e0e0, overdraw: 0.5 } );
  // plane = new THREE.Mesh( geometry, material );
  // scene.add( plane );

  //container.appendChild( renderer.domElement );
  //container.addEventListener( 'mousedown', onDocumentMouseDown, false );
  //container.addEventListener( 'touchstart', onDocumentTouchStart, false );
  //container.addEventListener( 'touchmove', onDocumentTouchMove, false );
  // window.addEventListener( 'resize', onWindowResize, false );
}

 /*

 function onWindowResize() {
   windowHalfX = window.innerWidth / 2;
   windowHalfY = window.innerHeight / 2;
   camera.aspect = window.innerWidth / window.innerHeight;
   camera.updateProjectionMatrix();
   renderer.setSize( window.innerWidth, window.innerHeight );
 }

 function onDocumentMouseDown( event ) {
  event.preventDefault();
  document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  document.addEventListener( 'mouseup', onDocumentMouseUp, false );
  document.addEventListener( 'mouseout', onDocumentMouseOut, false );
  mouseXOnMouseDown = event.clientX - windowHalfX;
  targetRotationOnMouseDown = targetRotation;
}
function onDocumentMouseMove( event ) {
  mouseX = event.clientX - windowHalfX;
  targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;
}
function onDocumentMouseUp( event ) {
  document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
  document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
  document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}
function onDocumentMouseOut( event ) {
  document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
  document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
  document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
}
function onDocumentTouchStart( event ) {
  if ( event.touches.length === 1 ) {
    event.preventDefault();
    mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
    targetRotationOnMouseDown = targetRotation;
  }
}
function onDocumentTouchMove( event ) {
  if ( event.touches.length === 1 ) {
    event.preventDefault();
    mouseX = event.touches[ 0 ].pageX - windowHalfX;
    targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * cameraMoveIntensity;
  }
}

function animate() {
  requestAnimationFrame( animate );
  render();
} */
