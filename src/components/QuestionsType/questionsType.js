const questionsType = (props) => {
    let type = null;
    switch (props.type) {
        case "matrix":
            type = "matrix question"
            break;

        default:
            type = null;
            break;
    }
    return type;
}


export default questionsType