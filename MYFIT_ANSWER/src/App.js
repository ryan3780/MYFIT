import React from "react";
import "./styles.css";

const data = [
  {
    label: "패딩",
    id: "padded",
    type: "radio",
    options: [
      {
        label: "없음",
        value: "none",
        mapping: {
          아우터: "PN",
          상의: "PN",
          "블라우스/셔츠": "PN",
          액티브웨어: "PN",
          원피스: "PN",
        },
      },
      {
        label: "라이트",
        value: "light",
        mapping: {
          아우터: "PL",
          상의: "PL",
          "블라우스/셔츠": "PL",
          액티브웨어: "PL",
          원피스: "PL",
        },
      },
      {
        label: "헤비",
        value: "heavy",
        mapping: {
          아우터: "PH",
          상의: "PH",
          "블라우스/셔츠": "PH",
          액티브웨어: "PH",
          원피스: "PH",
        },
      },
    ],
  },
  {
    label: "계절감",
    id: "season",
    type: "checkbox",
    values: [],
    options: [
      { label: "봄", value: "spring" },
      { label: "여름", value: "summer" },
      { label: "가을", value: "fall" },
      { label: "겨울", value: "winter" },
    ],
  },
  {
    label: "두께감",
    id: "thickness",
    type: "radio",
    options: [
      { label: "얇음", value: "light" },
      { label: "적당", value: "regular" },
      { label: "두꺼움", value: "thick" },
    ],
  },
  {
    label: "메시지",
    id: "message",
    type: "input",
  },
  {
    label: "촉감",
    id: "texture",
    type: "radio",
    options: [
      { label: "부드러움", value: "soft" },
      { label: "보통", value: "regular" },
      { label: "까칠함", value: "rough" },
    ],
  },
];

console.log(data)

export default function App() {
  const [resulsts, setResult] = React.useState({
    season : { values : []},
    message : {value : ''},
    texture : {value : ''}
  })
  return (
    <div className="App">
      <img
        src="https://cdn.filestackcontent.com/p6XWkeWOQsuQ3axeuxzQ"
        alt="문제1"
      />{" "}
      <br />
      <div>
        {" "}
        위 이미지에서 경고창 문구 오타입니다(메시지, 촉감 입력해주세요!){" "}
      </div>
      <div> 여름, 가을에 체크한 것, 화이팅!같은 문구는 예시일 뿐입니다. </div>
      <br />
      <div> 배열의 메서드를 사용하면 가산점이 있습니다 </div>
      <div> data 변수를 사용하여 여기 아래에 작성하세요. </div>
    </div>
  );
}
