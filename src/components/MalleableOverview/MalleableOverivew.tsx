import useMalleableODIStore from '../../store';
import { MalleableODIProps } from '../MalleableODI/MalleableODI';

export function MalleableOverview({
  id,
  itemList,
  children,
}: MalleableODIProps) {
  // const { malleableODIMap, setMalleableODI } = useMalleableODIStore();

  // setMalleableODI(id, {
  //   itemList,
  //   children,
  //   selectedIndex: 0,
  // });

  // const malleableODIState = malleableODIMap[id];

  return (
    <div className="flex-1 w-full h-[400px] flex flex-col border-r overflow-hidden">
      <div className="overflow-scroll">
        {itemList.map((item, index) => (
          <>
            {index > 0 && <hr />}
            <div key={item.name}>{children({ item })}</div>
          </>
        ))}
      </div>
    </div>
  );
  // if (malleableODIState) {
  // } else {
  //   return <div>This is overview</div>;
  // }
}
