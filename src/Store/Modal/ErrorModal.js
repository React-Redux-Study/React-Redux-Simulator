import { createSlice } from "@reduxjs/toolkit";
// createSlice는 작업 생성자 및 작업 유형을 생성하는 옵션을 제공
// 즉, action과 reducer를 합쳐서 선언을 하게 해 준다는 뜻

export const ErrorModalSlice = createSlice(
    {
        //slice 명칭
        name : "errorModal",
        //state 초기 선언
        initialState:{
            modalMessageRedux:"",
        },
        //reducer 상태 정의
        reducers:{
            SET_ERROR_MODAL_MESSAGE:(state, action) =>{
                state.modalMessageRedux = action.payload;
            }
        }
    }
);

//export 할 action값을 추출 => dispatch 를 이용하여 실제 사용할 값
export const {
    SET_ERROR_MODAL_MESSAGE
} = ErrorModalSlice.actions;

//export 할 reducer 값을 추출
export default ErrorModalSlice.reducer;