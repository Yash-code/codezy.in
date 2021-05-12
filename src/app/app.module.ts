import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeaderComponent } from './pages/layout/home-header/home-header.component';
import { HomeFooterComponent } from './pages/layout/home-footer/home-footer.component';
import { HomeSidenavComponent } from './pages/layout/home-sidenav/home-sidenav.component';
import { HtmlSidenavComponent } from './pages/layout/html-sidenav/html-sidenav.component';
import { HtmlHomeComponent } from './pages/html/html-home/html-home.component';
import { IntroductionComponent } from './pages/html/introduction/introduction.component';
import { EditorComponent } from './pages/html/editor/editor.component';
import { BasicComponent } from './pages/html/basic/basic.component';
import { ElementComponent } from './pages/html/element/element.component';
import { AttributesComponent } from './pages/html/attributes/attributes.component';
import { HeadingsComponent } from './pages/html/headings/headings.component';
import { ParagraphComponent } from './pages/html/paragraph/paragraph.component';
import { StyleComponent } from './pages/html/style/style.component';
import { FormattingComponent } from './pages/html/formatting/formatting.component';
import { CssComponent } from './pages/html/css/css.component';
import { LinksComponent } from './pages/html/links/links.component';
import { ImagesComponent } from './pages/html/images/images.component';
import { TableComponent } from './pages/html/table/table.component';
import { ListsComponent } from './pages/html/lists/lists.component';
import { ClassesComponent } from './pages/html/classes/classes.component';
import { IdComponent } from './pages/html/id/id.component';
import { JavascriptComponent } from './pages/html/javascript/javascript.component';
import { FilepathsComponent } from './pages/html/filepaths/filepaths.component';
import { HeadComponent } from './pages/html/head/head.component';
import { LayoutComponent } from './pages/html/layout/layout.component';
import { HomecssComponent } from './pages/css/homecss/homecss.component';
import { CssSidenavComponent } from './pages/layout/css-sidenav/css-sidenav.component';
import { CssintroductionComponent } from './pages/css/cssintroduction/cssintroduction.component';
import { SyntaxComponent } from './pages/css/syntax/syntax.component';
import { HowtoComponent } from './pages/css/howto/howto.component';
import { CommentsComponent } from './pages/css/comments/comments.component';
import { BackgroundsComponent } from './pages/css/backgrounds/backgrounds.component';
import { BorderComponent } from './pages/css/border/border.component';
import { MarginsComponent } from './pages/css/margins/margins.component';
import { HeightwidthpaddingComponent } from './pages/css/heightwidthpadding/heightwidthpadding.component';
import { BoxmodelComponent } from './pages/css/boxmodel/boxmodel.component';
import { OutlineComponent } from './pages/css/outline/outline.component';
import { TextComponent } from './pages/css/text/text.component';
import { FontsComponent } from './pages/css/fonts/fonts.component';
import { IconsComponent } from './pages/css/icons/icons.component';
import { PositionComponent } from './pages/css/position/position.component';
import { OverflowComponent } from './pages/css/overflow/overflow.component';
import { FloatinlineblockComponent } from './pages/css/floatinlineblock/floatinlineblock.component';
import { AlignComponent } from './pages/css/align/align.component';
import { NavigationbarComponent } from './pages/css/navigationbar/navigationbar.component';
import { DropdownsComponent } from './pages/css/dropdowns/dropdowns.component';
import { CsslinkComponent } from './pages/css/csslink/csslink.component';
import { CsstableComponent } from './pages/css/csstable/csstable.component';
import { JavahomeComponent } from './pages/javascript/javahome/javahome.component';
import { JsSidenavComponent } from './pages/layout/js-sidenav/js-sidenav.component';
import { JsintroComponent } from './pages/javascript/jsintro/jsintro.component';
import { JswheretoComponent } from './pages/javascript/jswhereto/jswhereto.component';
import { CommentComponent } from './pages/javascript/comment/comment.component';
import { JsstatementComponent } from './pages/javascript/jsstatement/jsstatement.component';
import { JsvariablesComponent } from './pages/javascript/jsvariables/jsvariables.component';
import { JsoperatorsComponent } from './pages/javascript/jsoperators/jsoperators.component';
import { JsfuntionsComponent } from './pages/javascript/jsfuntions/jsfuntions.component';
import { JsobjectsComponent } from './pages/javascript/jsobjects/jsobjects.component';
import { JseventsComponent } from './pages/javascript/jsevents/jsevents.component';
import { JsstringsComponent } from './pages/javascript/jsstrings/jsstrings.component';
import { JsarraysComponent } from './pages/javascript/jsarrays/jsarrays.component';
import { JsdatsComponent } from './pages/javascript/jsdats/jsdats.component';
import { JsbooleanComponent } from './pages/javascript/jsboolean/jsboolean.component';
import { JsforloopComponent } from './pages/javascript/jsforloop/jsforloop.component';
import { JswhileloopComponent } from './pages/javascript/jswhileloop/jswhileloop.component';
import { JsbreakpointComponent } from './pages/javascript/jsbreakpoint/jsbreakpoint.component';
import { DebugginComponent } from './pages/javascript/debuggin/debuggin.component';
import { JasonComponent } from './pages/javascript/jason/jason.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { CssexerciseComponent } from './pages/exercise/cssexercise/cssexercise.component';
import { JavaexerciseComponent } from './pages/exercise/javaexercise/javaexercise.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrivacypolicyComponent } from './pages/cwk/privacypolicy/privacypolicy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    HomeSidenavComponent,
    HtmlSidenavComponent,
    HtmlHomeComponent,
    IntroductionComponent,
    EditorComponent,
    BasicComponent,
    ElementComponent,
    AttributesComponent,
    HeadingsComponent,
    ParagraphComponent,
    StyleComponent,
    FormattingComponent,
    CssComponent,
    LinksComponent,
    ImagesComponent,
    TableComponent,
    ListsComponent,
    ClassesComponent,
    IdComponent,
    JavascriptComponent,
    FilepathsComponent,
    HeadComponent,
    LayoutComponent,
    HomecssComponent,
    CssSidenavComponent,
    CssintroductionComponent,
    SyntaxComponent,
    HowtoComponent,
    CommentsComponent,
    BackgroundsComponent,
    BorderComponent,
    MarginsComponent,
    HeightwidthpaddingComponent,
    BoxmodelComponent,
    OutlineComponent,
    TextComponent,
    FontsComponent,
    IconsComponent,
    PositionComponent,
    OverflowComponent,
    FloatinlineblockComponent,
    AlignComponent,
    NavigationbarComponent,
    DropdownsComponent,
    CsslinkComponent,
    CsstableComponent,
    JavahomeComponent,
    JsSidenavComponent,
    JsintroComponent,
    JswheretoComponent,
    CommentComponent,
    JsstatementComponent,
    JsvariablesComponent,
    JsoperatorsComponent,
    JsfuntionsComponent,
    JsobjectsComponent,
    JseventsComponent,
    JsstringsComponent,
    JsarraysComponent,
    JsdatsComponent,
    JsbooleanComponent,
    JsforloopComponent,
    JswhileloopComponent,
    JsbreakpointComponent,
    DebugginComponent,
    JasonComponent,
    ExerciseComponent,
    CssexerciseComponent,
    JavaexerciseComponent,
    PrivacypolicyComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
