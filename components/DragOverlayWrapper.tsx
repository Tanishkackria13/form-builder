import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core'
import React, { useState } from 'react'
import SidebarBtnElement, { SidebarBtnElementDragOverlay } from './SidebarBtnElement';
import { ElementsType, FormElements } from './FormElements';

function DragOverlayWrapper() {
    const [draggeredItem , setDraggeredItem] = useState<Active | null>(null);
    useDndMonitor({
        onDragStart:(event) => {
            setDraggeredItem(event.active)
        },
        onDragCancel:() => {
          setDraggeredItem(null);
        },
        onDragEnd:() => {
          setDraggeredItem(null);
        }
    })

    if(!draggeredItem) return null;


    let  node = <div>No drag Overlay</div>
    const isSidebarBtnElement = draggeredItem?.data?.current?.isDesignerBtnElement;

    if(isSidebarBtnElement){
      const type = draggeredItem.data?.current?.typem as ElementsType;
      node = <SidebarBtnElementDragOverlay formElement = {FormElements[type] }/>
    }
  return (
    <DragOverlay>{node}</DragOverlay>
  )
}

export default DragOverlayWrapper