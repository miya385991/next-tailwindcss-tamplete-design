import s from './Sidebar.module.css';
import { FC } from "react";

interface Props {
  title: Array<string>;
}

const Sidebar:FC<Props> = ({title}) => {
  return (
    <div>
      <aside className="w-64" aria-label="Sidebar">
        <div className={s.div}>
          <ul className={s.ui}>
            {
              title.map((item, index) => 
            <li key={index}>
              <a
                href={`/item/${item.toLocaleLowerCase()}`}
                className={s.a}
              >
                <span className={s.span}>{item}</span>
              </a>
            </li>
              )}
            
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar