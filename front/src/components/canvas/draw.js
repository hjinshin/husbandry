
function draw(ctx, animal, images, x, y, x_direction, angle) {
    const margin_top = Math.max(animal.h_tail, animal.h_head, animal.h_wing ? animal.h_wing/2 - animal.r:0);
    const radianAngle = (angle * Math.PI) / 180;

    ctx.save()
    // 좌우 반전
    if(x_direction === -1) {
        ctx.scale(-1, 1);
        x = - x - animal.width;
    }
    ctx.translate(x + animal.width / 2, y + animal.height/2); // 그림의 중간을 중심으로 이동
    ctx.rotate(radianAngle); // 각도만큼 회전
    ctx.translate(-(x + animal.width / 2), -(y + animal.height/2)); // 다시 원래 위치로 이동
    // body
    ctx.filter = animal.color;
    ctx.drawImage(images[0], x + animal.w_tail - animal.r,     // x
                            y + margin_top - animal.h_body,    // y
                            animal.w_body,                     // width
                            animal.h_body);                    // height
    // body_border
    ctx.filter = "none";
    ctx.drawImage(images[6], x + animal.w_tail - animal.r,     // x
                            y + margin_top - animal.h_body,    // y
                            animal.w_body,                     // width
                            animal.h_body);                    // height     

    // head    
    ctx.filter = animal.color;
    ctx.drawImage(images[1], x + animal.w_tail + animal.w_body - 2*animal.r, 
                            y + margin_top - animal.h_head, 
                            animal.w_head, 
                            animal.h_head);
    // head_border
    ctx.filter = "none";
    ctx.drawImage(images[7], x + animal.w_tail + animal.w_body - 2*animal.r, 
                            y + margin_top - animal.h_head, 
                            animal.w_head, 
                            animal.h_head);

    // tail
    ctx.filter = animal.color;    
    ctx.drawImage(images[2], x, 
                            y + margin_top - animal.h_tail, 
                            animal.w_tail, 
                            animal.h_tail);
    // tail_border
    ctx.filter = "none";    
    ctx.drawImage(images[8], x, 
        y + margin_top - animal.h_tail, 
        animal.w_tail, 
        animal.h_tail);

    // f_leg
    ctx.filter = animal.color; 
    ctx.drawImage(images[3], x + animal.w_tail + animal.w_body - 2*animal.r - animal.w_f_leg/2, 
                            y + margin_top - animal.r, 
                            animal.w_f_leg, 
                            animal.h_f_leg);
    // f_leg_border
    ctx.filter = "none"; 
    ctx.drawImage(images[9], x + animal.w_tail + animal.w_body - 2*animal.r - animal.w_f_leg/2, 
                            y + margin_top - animal.r, 
                            animal.w_f_leg, 
                            animal.h_f_leg);

    // b_leg
    ctx.filter = animal.color;
    ctx.drawImage(images[4], x + animal.w_tail - animal.w_b_leg/2,
                            y + margin_top - animal.r, 
                            animal.w_b_leg,
                            animal.h_b_leg);
    // b_leg_border
    ctx.filter = "none";
    ctx.drawImage(images[10], x + animal.w_tail - animal.w_b_leg/2,
                            y + margin_top - animal.r, 
                            animal.w_b_leg,
                            animal.h_b_leg);
                            
    // wing                        
    ctx.filter = animal.color;
    ctx.drawImage(images[5], x + animal.w_tail - animal.r + animal.w_body/2 - animal.w_wing/2,
                            y + margin_top - animal.r - animal.h_wing/2,
                            animal.w_wing,
                            animal.h_wing);   
    // wing_border                      
    ctx.filter = "none";
    ctx.drawImage(images[11], x + animal.w_tail - animal.r + animal.w_body/2 - animal.w_wing/2,
                            y + margin_top - animal.r - animal.h_wing/2,
                            animal.w_wing,
                            animal.h_wing);
                                     
    ctx.restore();


    return ctx;
};

export default draw;