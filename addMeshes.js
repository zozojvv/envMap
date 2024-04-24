import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()


// Exporting video element and playback function
export const videoControl = {
    playVideo: () => video.play().catch(e => console.error('Error attempting to play video:', e)),
    videoElement: video
};

// key control 
document.onkeydown = function(e){
	if (e.keyCode === 80){
		// p key - play
		video.onplay();
	} else if (e.keyCode === 32) {
		video.onpause();
	}
}


export function addBoilerPlateMesh() {
	// video as texture
	let video = document.getElementById("video");

	//prevent stopping video : https://drupal.org/project/varbase_heroslider_media/issues/3354558
	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	// const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(0, 0, 0)
	return boxMesh
}

export function addVideoMesh2() {
	// video as texture
	let video = document.getElementById("video2");

	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	// const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(1, 2.5, -0.5)
	return boxMesh
}

export function addVideoMesh3() {
	// video as texture
	let video = document.getElementById("video");

	//prevent stopping video : https://drupal.org/project/varbase_heroslider_media/issues/3354558
	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	// const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(2, 4, -1)
	return boxMesh
}

export function addVideoMesh4() {
	// video as texture
	let video = document.getElementById("video");

	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(-5, -6, 0)
	return boxMesh
}

export function addVideoMesh5() {
	// video as texture
	let video = document.getElementById("video");

	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(-6, 2, -3)
	return boxMesh
}

export function addVideoMesh6() {
	// video as texture
	let video = document.getElementById("video");

	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(-8, -3, -3)
	return boxMesh
}


export function addVideoMesh7() {
	// video as texture
	let video = document.getElementById("video");

	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(-2, -4, -2)
	return boxMesh
}

export function addVideoMesh8() {
	// video as texture
	let video = document.getElementById("video");

	let playPromise = video.play();

	if (playPromise !== undefined) {
	  playPromise.then(_ => {
		// Automatic playback started!
		// Show playing UI.
	  })
	  .catch(error => {
		// Auto-play was prevented
		// Show paused UI.
	  });
	}

	let videoTexture = new THREE.VideoTexture(video);
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;

	let movieMaterial = new THREE.MeshBasicMaterial({
		map: videoTexture, 
		side: THREE.FrontSide,
		toneMapped: false,
	});

	const box = new THREE.BoxGeometry(4, 2, 0.02)

	const boxMesh = new THREE.Mesh(box, movieMaterial)
	boxMesh.position.set(-6, 7, 0)
	return boxMesh
}