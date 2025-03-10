import { Fragment } from "react/jsx-runtime"
import { RoverImageAPIManager } from "../scripts/APIManagers"



function GetRandomImagePage() {

  // const getInputValue = (elementId: string): string => {
  //   const INPUT_ELEMENT: HTMLInputElement = document.getElementById(elementId) as HTMLInputElement
  //   return INPUT_ELEMENT.value
  // }

  // const getUserMessageInput = (): string => {
  //   const INPUT_MESSAGE: string = getInputValue("entry-message")
  //   return INPUT_MESSAGE
  // }

  async function getRandomImage() {
    const imageSource: string = await RoverImageAPIManager.instance.getRandomImageSource()
    
    const ELEMENT: HTMLImageElement = document.getElementById("random-image-display") as HTMLImageElement
    ELEMENT.src = imageSource
  }


  return (
    <Fragment>
      <h1>
        Get an Image
      </h1>
      <button onClick={getRandomImage}><span className="sr-only">Get An Image</span></button>
      <img id="random-image-display" src="" alt="no images" />
    </Fragment>
  )
}


export default GetRandomImagePage