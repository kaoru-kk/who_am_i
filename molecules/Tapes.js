export default function Tapes() {

  const tapes = [
    {text: 'AND THE BEATS GO ON. AND THE BEATS GO ON.', scrollSpeed: 10,  klassNumber: 'one'},
    {text: 'I LOVE DOG AND CAT. I LOVE DOG AND CAT.', scrollSpeed: 11,  klassNumber: 'two'},
    {text: 'AND THE BEATS GO ON. AND THE BEATS GO ON.', scrollSpeed: 12,  klassNumber: 'three'},
    {text: 'AND THE BEATS GO ON. AND THE BEATS GO ON.', scrollSpeed: 13,  klassNumber: 'four'},
    {text: 'I LOVE CHAINSAW MAN. I LOVE CHAINSAW MAN.', scrollSpeed: 14,  klassNumber: 'five'},
    {text: 'Brand New Civilization. Brand New Civilization.', scrollSpeed: 15,  klassNumber: 'six'},
  ] 

    const tapesComponent = tapes.map(tape => {
      return (
        <div key={tape.klassNumber} className={`cautionBarContainer ${tape.klassNumber}` }>
          <span 
            className="cautionBarText"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed={`${tape.scrollSpeed}`}
            data-scroll-target="#many_tape"
          >${tape.text}</span>
        </div>
      )
    })

    return ( tapesComponent )
  }
