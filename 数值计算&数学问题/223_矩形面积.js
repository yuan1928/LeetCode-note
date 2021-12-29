var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    let xl=Math.max(ax1,bx1)
    let xr=Math.min(ax2,bx2)
    let yt=Math.min(ay2,by2)
    let yb=Math.max(ay1,by1)

    let w=(xr-xl>0)?(xr-xl):0
    let h=(yt-yb>0)?(yt-yb):0
    return (ax2-ax1)*(ay2-ay1)+(bx2-bx1)*(by2-by1)-w*h
};
//console.log(computeArea(ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2));
console.log(computeArea(ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2));