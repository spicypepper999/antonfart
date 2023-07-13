function playMyAudio(){
var audio = new Audio('polishcow.mp3');
audio.volume = 0.5;
audio.play();
}

var params = {
	color: '#ffffff'
};

var scene = new THREE.Scene();
scene.background = new THREE.Color(params.color);

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight - 75 );
document.body.appendChild( renderer.domElement );

// var controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var mtlLoader = new THREE.MTLLoader();
var cowObject;
mtlLoader.setTexturePath('./js/assets/');
mtlLoader.setPath('./js/assets/');
mtlLoader.load('Cow.mtl', function (materials) {

    materials.preload();

    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('./js/assets/');
    objLoader.load('Cow.obj', function (object) {

        cowObject = object;
        scene.add(object);
 //       object.position.y -= 60;

    });

});

var animate = function () {
	requestAnimationFrame( animate );
     cowObject.rotation.x += 0.005;
     cowObject.rotation.y += 0.005;
     cowObject.rotation.z -= 0.005;
	// controls.update();
	renderer.render(scene, camera);
};

animate();
