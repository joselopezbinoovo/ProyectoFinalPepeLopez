import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ChipsModule} from 'primeng/chips';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {OverlayPanelModule} from 'primeng/overlaypanel';



@NgModule({
  declarations: [],
  imports: [
    BreadcrumbModule,
    TableModule,
    TooltipModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    PasswordModule,
    RippleModule,
    PaginatorModule,
    AutoCompleteModule,
    ChipsModule,
    TreeModule,
    AccordionModule,
    ChipsModule,
    MenuModule,
    OverlayPanelModule
  ],
  exports: [
    TableModule,
    TooltipModule,
    DynamicDialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    PasswordModule,
    RippleModule,
    PaginatorModule,
    AccordionModule,
    AutoCompleteModule,
    ChipsModule,
    TreeModule,
    MenuModule,
    BreadcrumbModule,
    OverlayPanelModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModuleModule { }