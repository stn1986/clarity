/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<form>
    <section class="form-block">
        <label>A Form</label>
        <div class="form-group">
            <label for="aForm_1">This is a form field</label>
            <input type="text" id="aForm_1" placeholder="Enter value here" size="45">
        </div>
        <div class="form-group">
            <label for="aForm_2">Another form field</label>
            <input type="password" id="aForm_2" placeholder="Enter another value here" size="35">
        </div>
        <div class="form-group">
            <label for="aForm_3">A select box</label>
            <div class="select">
                <select id="aForm_3">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <label for="aForm_4">Textarea</label>
            <textarea id="aForm_4" rows="5"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Button</button>
    </section>
</form>
`;

@Component({
    selector: "clr-forms-demo-fields",
    templateUrl: "./form-fields.demo.html"
})
export class FormFieldsDemo {
    example = EXAMPLE;
}
