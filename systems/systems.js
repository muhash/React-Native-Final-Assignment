var moved = false;
const MoveFinger = (entities, {touches}) => {


    if (touches[0] != undefined){
        if (touches[0].type == "move"){
            if (touches[0].delta.pageX > 50 && moved == false) {
                moved = true;
                console.log('right');
                setTimeout(function () {
                    moved= false
                }, 1000)
            }
            if (touches[0].delta.pageX < -50 && moved == false) {
                moved = true;
                console.log('left');
                setTimeout(function () {
                    moved= false
                }, 1000)
            }
        }
    }
    return entities;
};

export {MoveFinger};
