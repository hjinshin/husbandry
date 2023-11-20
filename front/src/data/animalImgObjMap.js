import Worm from '../images/worm/worm.svg';
import Worm_Body from '../images/worm/body.svg';
import Worm_Head from '../images/worm/head.svg';
import Worm_Tail from '../images/worm/tail.svg';
import Worm_Body_border from '../images/worm/body_border.svg';
import Worm_Head_border from '../images/worm/head_border.svg';
import Worm_Tail_border from '../images/worm/tail_border.svg';
import Chicken from '../images/chicken/chicken.svg';
import Chicken_Body from '../images/chicken/body.svg';
import Chicken_Head from '../images/chicken/head.svg';
import Chicken_Tail from '../images/chicken/tail.svg';
import Chicken_B_Leg from '../images/chicken/b_leg.svg';
import Chicken_Wing from '../images/chicken/wing.svg';
import Chicken_Body_border from '../images/chicken/body_border.svg';
import Chicken_Head_border from '../images/chicken/head_border.svg';
import Chicken_Tail_border from '../images/chicken/tail_border.svg';
import Chicken_B_Leg_border from '../images/chicken/b_leg_border.svg';
import Chicken_Wing_border from '../images/chicken/wing_border.svg';

export const animalImgObjMap = {
    worm: {
        body: Worm_Body,
        head: Worm_Head,
        tail: Worm_Tail,
        f_leg: '',
        b_leg: '',
        wing: '',
        body_border: Worm_Body_border,
        head_border: Worm_Head_border,
        tail_border: Worm_Tail_border,
        f_leg_border: '',
        b_leg_border: '',
        wing_border: '',
    },
    chicken: {
        body: Chicken_Body,
        head: Chicken_Head,
        tail: Chicken_Tail,
        f_leg: '',
        b_leg: Chicken_B_Leg,
        wing: Chicken_Wing,
        body_border: Chicken_Body_border,
        head_border: Chicken_Head_border,
        tail_border: Chicken_Tail_border,
        f_leg_border: '',
        b_leg_border: Chicken_B_Leg_border,
        wing_border: Chicken_Wing_border,
    },
}

export const animalImageList = [Worm, Chicken];