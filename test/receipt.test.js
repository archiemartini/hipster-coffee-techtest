describe('the Receipt class', () => {
  
  it('', () => {
    
  })

  it('calculates dinner with Tom correctly', () => {
    let oyster = 21 / 3
    let lunch = 20
    let bread = 4.5 / 2
    let gruner = 36 / 4
    let albillo = 43 / 4
    let burgundy = 60 / 4
    let johnDory = 27
    let mellisaki = 45 / 4

    const result = (oyster + lunch + bread + gruner + albillo + burgundy + johnDory + mellisaki)
    expect(result).toEqual(102.25)
  })

})