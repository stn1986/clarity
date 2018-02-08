/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const EXAMPLE = `
<form>
    <section class="form-block">
        <label>Form Inside a Grid</label>
        <div class="form-group row">
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <label for="gForm_1">Input field</label>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <input class="form-control" type="text" id="gForm_1" placeholder="Enter value here" size="45">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <input class="form-control" type="password" id="gForm_2" placeholder="Enter another value here" size="35">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <label for="gForm_3">Select box</label>
            </div>
            <div class="col-lg-4 col-md-8 col-sm-12 col-xs-12">
                <div class="select form-control">
                    <select id="gForm_3">
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                        <option>Option 4</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <label for="gForm_4">Text area</label>
            </div>
            <div class="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                <textarea id="gForm_4" rows="5" class="form-control"></textarea>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <label>Another select box</label>
            </div>
            <div class="col-lg-4 col-md-5 col-sm-12 col-xs-12">
                <div class="select form-control">
                    <select id="exampleSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div class="col-lg-3 col-md-5 col-sm-12 col-xs-12">
                <span>Sockets: 1</span>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                <label for="gForm_3">Other form fields</label>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-12 col-xs-12">
                <div class="toggle-switch">
                    <input type="checkbox" id="othertoggle">
                    <label for="othertoggle">Toggle</label>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="checkbox-inline">
                    <input type="checkbox" id="othercheckbox" checked>
                    <label for="othercheckbox">Inline Checkbox</label>
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Button</button>
    </section>
</form>
`;

@Component({
    selector: "clr-forms-demo-grid",
    templateUrl: "./form-grid.demo.html"
})
export class FormGridDemo {
    example = EXAMPLE;
}
