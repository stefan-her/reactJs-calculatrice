import React, { useState } from 'react';

const Calculatrice = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [nb3, setNb3] = useState('');
    const [op, setOp] = useState('+');

    const handelChange = (nb, e) => {
        const v = e.target.value;
        if(/^([0-9]+)?$/.test(v)) {
            if(nb === 1) { setNb1(v); }
            if(nb === 2) { setNb2(v); }
        }
    }

    const calcul = (e) => {
        e.preventDefault();
        
        const v1 = parseInt(nb1);
        const v2 = parseInt(nb2);
        let result = null;

        console.log(op);

        switch(true) {
            case op === "+": result = v1 + v2;
            break;
            case op === "-": result = v1 - v2;
            break;
            case op === "*": result = v1 * v2;
            break;
            case op === "/": result = v1 / v2;
            break;
        }
        console.log(result);
        setNb3(result);
    }

    return (
        <form onSubmit={calcul}>
            <label>nb1</label>
            <input type="text" id="nb1" onChange={(e) => handelChange(1, e)} value={nb1} />
            <label>op</label>
            <select id="op" onChange={(e) => setOp(e.target.value)} value={op}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">x</option>
                <option value="/">/</option>
            </select>
            <label>nb2</label>
            <input type="text" id="nb2" onChange={(e) => handelChange(2, e)} value={nb2} />
            <input type="submit" value="calculer"/>
            <input type="text" readOnly="readOnly" value={nb3}/>         
        </form>
    );
}

export default Calculatrice