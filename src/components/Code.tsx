import { Code as CodeTypes } from '../types/ComponentsTypes';

import { useEffect } from 'react';
import { highlightAll } from 'prismjs';

const Code = ({
    children, language = "html", theme = "okaidia"
} : CodeTypes.Types) => {
    useEffect(() => highlightAll());

    require(`prismjs/themes/prism${theme==="default"?"":"-".concat(theme)}.min.css`);

    return (
        <pre>
            <code className={`language-${language}`}>
                {children instanceof Array ? children.map(e => e) : children}
            </code>
        </pre>
    );
};

export default Code;
