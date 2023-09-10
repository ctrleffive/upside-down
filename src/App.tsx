import { LogoIntro } from "./components/LogoIntro"

export const App = () => {
  const onReady = () => {
    // console.log("");
  }

  return <>
    <LogoIntro onReady={onReady} />
  </>
}
