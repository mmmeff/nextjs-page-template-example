import React from 'react';
import Link from 'next/link';
import Page from '../components/Page';


export default class IndexPage extends Page {
    constructor(props) {
        super(props);
    }

    render() {
        return super.render(
            <div>
                <h1>home page</h1>
                <Link href="/about"><a>to about page</a></Link>
            </div>
        );
    }
}
