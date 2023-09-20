function distributeGifts(packOfGifts, reindeers) {
    let totalGifts =0;
    let totalrenos =0;

    packOfGifts.forEach(
        gift => totalGifts+=gift.length
    );
    reindeers.forEach(
        reinder => totalrenos += reinder.length *2 
    );

    return Math.floor(totalrenos / totalGifts);
  }