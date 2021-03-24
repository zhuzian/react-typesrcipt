import { Input, Tooltip } from 'antd';
import React from 'react'

// function formatNumber(value) {
//   value += '';
//   const list = value.split('.');
//   const prefix = list[0].charAt(0) === '-' ? '-' : '';
//   let num = prefix ? list[0].slice(1) : list[0];
//   let result = '';
//   while (num.length > 3) {
//     result = `,${num.slice(-3)}${result}`;
//     num = num.slice(0, num.length - 3);
//   }
//   if (num) {
//     result = num + result;
//   }
//   return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
// }

// const  NumericInput = () => {
//   const onChange = e => {
//     const { value } = e.target;
//     const reg = /^-?\d*(\.\d*)?$/;
//     if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
//       onChange(value);
//     }
//   };

//   // '.' at the end or only '-' in the input box.
//   const onBlur = () => {
//     let valueTemp = value;
//     if (value.charAt(value.length - 1) === '.' || value === '-') {
//       valueTemp = value.slice(0, -1);
//     }
//     onChange(valueTemp.replace(/0*(\d+)/, '$1'));
//     if (onBlur) {
//       onBlur();
//     }
//   };

//   const title = value ? (
//     <span className="numeric-input-title">{value !== '-' ? formatNumber(value) : '-'}</span>
//   ) : (
//     'Input a number'
//   );


//   return (
//     <Tooltip
//       trigger={['focus']}
//       title={title}
//       placement="topLeft"
//       overlayClassName="numeric-input"
//     >
//       <Input
//         onChange={onChange}
//         onBlur={onBlur}
//         placeholder="请输入金额"
//         maxLength={25}
//       />
//     </Tooltip>
//   );
// }


// export default NumericInput
