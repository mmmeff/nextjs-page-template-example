import React    from 'react';
import Link     from 'next/link';
import Page     from '../components/Page';


export default class AboutPage extends Page {
    constructor(props) {
        super(props);
    }

    render() {
        return super.render(
            <div>
                <h1>about page</h1>
                <Link href="/"><a>to home page</a></Link>
            </div>
        );
    }
}
