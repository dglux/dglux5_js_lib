define(["lib/js/three/three.r82.min.js"],function(THREE){
    
    var MyWidget = (function (_super) {
        __extends(MyWidget, _super);
        function MyWidget(div, model) {
            _super.call(this, div, model);
            
            this.camera = new THREE.PerspectiveCamera( 70, div.offsetWidth / div.offsetHeight, 1, 1000 );
            this.camera.position.z = 400;

            this.scene = new THREE.Scene();

            var texture = new THREE.TextureLoader().load( this.getResourceUrl('lib/js/examples/threejs/crate.gif'));

            var geometry = new THREE.BoxBufferGeometry( 200, 200, 200 );
            var material = new THREE.MeshBasicMaterial( { map: texture } );

            this.mesh = new THREE.Mesh( geometry, material );
            this.scene.add( this.mesh );

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize( div.offsetWidth, div.offsetHeight );
            div.appendChild( this.renderer.domElement );
            
            var widget = this;
            function animate() {
                if (widget.destroyed) {
                    return;
                }
                requestAnimationFrame( animate );

                widget.mesh.rotation.x += 0.005;
                widget.mesh.rotation.y += 0.01;

                widget.renderer.render( widget.scene, widget.camera );
            }
            animate();
        }

        MyWidget.prototype.destroy = function () {
        	this.renderer.domElement.remove();
        }

        return MyWidget;
    }(dgluxjs.Widget));

    function dgNewWidget(div, model) {
        return new MyWidget(div, model);
    }
    return {'dgNewWidget' : dgNewWidget};

});
