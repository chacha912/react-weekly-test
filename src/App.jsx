import './App.scss'

import { Heading } from "components";
import { FaqList } from "containers";

export default function App() {
  return (
  <div className='container'>
    <Heading>자주 묻는 질문</Heading>
    <FaqList></FaqList>
  </div>)
}
