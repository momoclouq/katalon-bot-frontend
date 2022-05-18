import ErrorCode from "./ErrorCode";

const basicError = (error) => {
    console.log(error);

    switch (error.message) {
        default: return {
            errorFound: true,
            message: ErrorCode['000']
        }
    }
}

export default basicError;