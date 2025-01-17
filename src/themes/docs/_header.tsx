// @deno-types="https://deno.land/x/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';

import { PagicLayout } from '../../Pagic.ts';
import Popover from './_popover.tsx';

const Header: PagicLayout<{
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}> = ({ config, isDark, setIsDark }) => (
  <header>
    <h1>
      <a href={config.root}>{config.title}</a>
    </h1>
    <nav>
      <ul>
        {config.nav
          .filter(({ align }: any) => align !== 'right')
          .map(({ text, link, target, popover }: any) => (
            <li key={link} className="nav_custom_item">
              {popover ? (
                <Popover placement="bottom-start" content={popover}>
                  <a href={link} target={target}>
                    {text}
                  </a>
                </Popover>
              ) : (
                <a href={link} target={target}>
                  {text}
                </a>
              )}
            </li>
          ))}
        <li className="mobile_menu flex_center">
          <a
            className="czs-menu-l"
            href="#"
            style={{ backgroundImage: `url("${config.root}assets/czs-menu-l.svg")` }}
            onClick={(e) => {
              e.preventDefault();
              // @ts-ignore
              if (document.documentElement.classList.contains('show_sidebar')) {
                // @ts-ignore
                document.documentElement.classList.remove('show_sidebar');
              } else {
                // @ts-ignore
                document.documentElement.classList.add('show_sidebar');
              }
            }}
          />
        </li>
        <li className="mobile_header">
          <h1>
            <a
              href={config.root}
              onClick={() => {
                // @ts-ignore
                document.documentElement.classList.remove('show_sidebar');
              }}
            >
              {config.title}
            </a>
          </h1>
        </li>
        <li style={{ flexGrow: 1 }} />
        {config.nav
          .filter(({ align }: any) => align === 'right')
          .map(({ text, link, target, popover }: any) => (
            <li key={link} className="nav_custom_item">
              {popover ? (
                <Popover placement="bottom-end" content={popover}>
                  <a href={link} target={target}>
                    {text}
                  </a>
                </Popover>
              ) : (
                <a href={link} target={target}>
                  {text}
                </a>
              )}
            </li>
          ))}
        {config.github && (
          <li className="flex_center">
            <a
              className="czs-github-logo"
              href={config.github}
              target="_blank"
              style={{ backgroundImage: `url("${config.root}assets/czs-github-logo.svg")` }}
            />
          </li>
        )}
        <li
          onClick={() => {
            setIsDark(!isDark);
            // @ts-ignore
            document.cookie = `is_dark=${!isDark ? '1' : '0'}; expires=Tue, 19 Jun 2038 03:14:07 UTC; path=/`;
          }}
          className="toggle_dark flex_center"
        >
          <span className="czs-sun" style={{ backgroundImage: `url("${config.root}assets/czs-sun.svg")` }} />
          <span className="czs-sun-l" style={{ backgroundImage: `url("${config.root}assets/czs-sun-l.svg")` }} />
          <span className="czs-moon" style={{ backgroundImage: `url("${config.root}assets/czs-moon.svg")` }} />
          <span className="czs-moon-l" style={{ backgroundImage: `url("${config.root}assets/czs-moon-l.svg")` }} />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
