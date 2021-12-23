export const getSmallestMultiple = (min: number, max: number): number => {
    let multiple = min
    let highestMin = min
    let step = min
    let currentMin = min
    let counter = 0
    while(currentMin <= max) {
        counter ++
        let remainder = multiple % currentMin
        if ( remainder ) { 
            multiple += step
            currentMin = min
        }
        else {
            if ( currentMin > highestMin ) {
                highestMin = currentMin
                step = multiple
            }
            currentMin ++
        }
    }
    console.log(counter)
    return multiple
}