import * as THREE from 'three';
import OBJLoader from 'three-obj-loader';
import MTLLoader from 'three-mtl-loader';

export function init(objectpath, mtlpath) {
  var container, stats;
  var camera, scene, renderer;
  var mouseX = 0, mouseY = 0;
  var windowHalfX = window.innerWidth / 2;
  var windowHalfY = window.innerHeight / 2;
  init();
  animate();
  function init() {
    var preview = document.getElementById('preview');
  	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
  	camera.position.z = 1000;
  	// scene
  	scene = new THREE.Scene();
  	var ambient = new THREE.AmbientLight( 0x444444 );
  	scene.add( ambient );
  	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
  	directionalLight.position.set( 0, 0, 1 ).normalize();
  	scene.add( directionalLight );
  	// model
  	var onProgress = function ( xhr ) {
  		if ( xhr.lengthComputable ) {
  			var percentComplete = xhr.loaded / xhr.total * 100;
  			console.log( Math.round(percentComplete, 2) + '% downloaded' );
  		}
  	};
  	var onError = function ( xhr ) { };
  	var mtlLoader = new MTLLoader();
    debugger;
  	mtlLoader.load(mtlpath, function( materials ) {
  		materials.preload();
  		var objLoader = new OBJLoader();
  		objLoader.setMaterials( materials );
  		objLoader.load( objectpath, function ( object ) {
  			object.position.y = - 95;
  			scene.add( object );
  		}, onProgress, onError );
  	});
  	//
  	renderer = new THREE.WebGLRenderer();
  	renderer.setPixelRatio( window.devicePixelRatio );
  	renderer.setSize(500 , 500);
  	preview.appendChild( renderer.domElement );
  	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
  	//
  	window.addEventListener( 'resize', onWindowResize, false );
  }
  function onWindowResize() {
  	windowHalfX = window.innerWidth / 2;
  	windowHalfY = window.innerHeight / 2;
  	camera.aspect = window.innerWidth / window.innerHeight;
  	camera.updateProjectionMatrix();
  	renderer.setSize( window.innerWidth, window.innerHeight );
  }
  function onDocumentMouseMove( event ) {
  	mouseX = ( event.clientX - windowHalfX ) / 2;
  	mouseY = ( event.clientY - windowHalfY ) / 2;
  }
  //
  function animate() {
  	requestAnimationFrame( animate );
  	render();
  }
  function render() {
  	camera.position.x += ( mouseX - camera.position.x ) * .05;
  	camera.position.y += ( - mouseY - camera.position.y ) * .05;
  	camera.lookAt( scene.position );
  	renderer.render( scene, camera );
  }
}
