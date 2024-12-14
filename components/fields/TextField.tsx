"use client";

import { MdTextFields } from "react-icons/md";
import { ElementsType, FormElement, formElementIstance } from "../FormElements";

const type: ElementsType = "TextField";

export const TextFieldFormElement: FormElement = {
    type,
    construct: (id: string) => ({
        id,
        type,
        extraAttributes: {
            label: "Text field",
            helperText: "Helper Text",
            requires: false,
            placeholder: "value here",
        },
    }),
    designerBtnElement: { 
        icon:  MdTextFields,
        label: "Text Field"
    },
    designerComponent: () => <div>Designer Component</div>,
    formComponent: () => <div>Form Component</div>,
    propertiesComponent: () => <div>Properties Component</div>,
};
