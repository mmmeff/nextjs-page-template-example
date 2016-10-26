require('glamor/reset');
import React    from 'react';
import css      from 'next/css';


export default class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render(children) {
        return (
            <page className={ styles }>
                <h2>header component</h2>

                { children }

                <h2>footer component</h2>
            </page>
        );
    }
}

const styles = css({
});
