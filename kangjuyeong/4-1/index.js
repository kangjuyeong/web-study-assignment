form.oninput = function () {
  // var x = n1.value,
  //     y = n2.value;

  //     Number(x);
  //     Number(y);

  // 0.value = Number(x) + Number(y);


  // console.log('x:', x);
  // console.log('y:', y);
  [1]
  var n1_value, n2_value;

  [2]
  n1_value = n1.value;
  n2_value = n2.value;

  [3]
  o.value = Number(n1_value) + Number(n2_value);

  // 미션 -----------------------------------------------------------------------------------------
  // [1] 변수 n1_value, n2_value를 선언합니다.
  // [2] 문서 객체 n1, n2 인풋 요소의 값을 선언된 변수 n1_value, n2_value 에 각각 대입합니다.
  // [3] 문서 객체 o 아웃풋 요소의 value 속성 값으로 n1_value, n2_value 변수 값을 숫자로 변형하여 합한 후 대입합니다.
  // ---------------------------------------------------------------------------------------------

};

