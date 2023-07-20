const isTrue = true;
const isFalse = false;

if (isTrue && isFalse) {
  console.log("Both isTrue and isFalse are true");
} else {
  console.log("At least one of isTrue or isFalse is false");
}


if (isTrue || isFalse) {
  console.log("At least one of isTrue or isFalse is true");
} else {
  console.log("Both isTrue and isFalse are false");
}

if (!isTrue) {
  console.log("isTrue is false");
} else {
  console.log("isTrue is true");
}
