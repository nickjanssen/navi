export type Reducer<X=any, Y=any> = (accumulator: Y | undefined, segmentData: X) => Y