const gifts1 = ["car", "doll#arm", "ball", "#train"];
const gifts2 = ["#broken", "#rusty"];
const gitfs3 = [];
function filterGifts(gifts) {
  return gifts.filter((element) => element != null && !element.includes("#"));
}
const good1 = filterGifts(gifts1);
const good2 = filterGifts(gifts2);
const good3 = filterGifts(gitfs3);
console.log(good1);
console.log(good2);
console.log(good3);