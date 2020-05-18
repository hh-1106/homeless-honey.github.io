let poseNet
let pose
let left, right

/**
 * 0   nose
 * 1	leftEye
 * 2	rightEye
 * 3	leftEar
 * 4	rightEar
 * 5	leftShoulder
 * 6	rightShoulder
 * 7	leftElbow
 * 8	rightElbow
 * 9	leftWrist
 * 10	rightWrist
 * 11	leftHip
 * 12	rightHip
 * 13	leftKnee
 * 14	rightKnee
 * 15	leftAnkle
 * 16	rightAnkle
 */

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  if(pose == null) return;
  for (let j = 0; j < pose.keypoints.length; j++) {
    // A keypoint is an object describing a body part (like rightArm or leftShoulder)
    let keypoint = pose.keypoints[j];
    // Only draw an ellipse is the pose probability is bigger than 0.2
    if (keypoint.score > 0.2) {
      fill(255, 0, 0);
      noStroke();
      ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
    }
  }
}
  
  // A function to draw the skeletons
function drawSkeleton() {
  if(pose == null) return;
  let skeleton = pose.skeleton;
  // For every skeleton, loop through all body connections
  for (let j = 0; j < skeleton.length; j++) {
    let partA = skeleton[j][0];
    let partB = skeleton[j][1];
    stroke(255, 0, 0);
    line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
  }
}

function modelLoaded() {
  console.log('poseNet ready', millis() * 0.001);
}

function drawWrists(){
  if(pose == null)  return
  noFill()
  stroke(90, 100, 100)
  ellipse(left.x, left.y, 100)
  ellipse(right.x, right.y, 100)
}
  
function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose
    
    // 640, 480
    left  = pose['leftWrist']
    right = pose['rightWrist']
    remap(left)
    remap(right)

    interactive(left.x, left.y)
    interactive(right.x, right.y)
  }
}

function remap(pos){
  pos.x = map(pos.x, 0, 640, width, 0)
  pos.y = map(pos.y, 0, 480, 0, height)
}



