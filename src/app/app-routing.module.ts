import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
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
import { PrivacypolicyComponent } from './pages/cwk/privacypolicy/privacypolicy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'html-home', component: HtmlHomeComponent },
  { path: 'html-introduction', component: IntroductionComponent },
  { path: 'html-editor', component: EditorComponent },
  { path: 'html-basic', component: BasicComponent },
  { path: 'html-element', component: ElementComponent },
  { path: 'html-attributes', component: AttributesComponent },
  { path: 'html-headings', component: HeadingsComponent },
  { path: 'html-paragraph', component: ParagraphComponent },
  { path: 'html-style', component: StyleComponent },
  { path: 'html-formatting', component: FormattingComponent },
  { path: 'html-css', component: CssComponent },
  { path: 'html-links', component: LinksComponent },
  { path: 'html-images', component: ImagesComponent },
  { path: 'html-table', component: TableComponent },
  { path: 'html-lists', component: ListsComponent },
  { path: 'html-classes', component: ClassesComponent },
  { path: 'html-id', component: IdComponent },
  { path: 'html-javascript', component: JavascriptComponent },
  { path: 'html-filepaths', component: FilepathsComponent },
  { path: 'html-head', component: HeadComponent },
  { path: 'html-layout', component: LayoutComponent },
  { path: 'homecss', component: HomecssComponent},
  { path: 'cssintroduction', component: CssintroductionComponent},
  { path: 'syntax', component: SyntaxComponent},
  { path: 'howto', component: HowtoComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'backgrounds', component: BackgroundsComponent},
  { path: 'border', component: BorderComponent},
  { path: 'margins', component: MarginsComponent},
  { path: 'heightwidthpadding', component: HeightwidthpaddingComponent},
  { path: 'boxmodel', component: BoxmodelComponent},
  { path: 'outline', component: OutlineComponent},
  { path: 'text', component: TextComponent},
  { path: 'fonts', component: FontsComponent},
  { path: 'icons', component: IconsComponent},
  { path: 'csslink', component: CsslinkComponent},
  { path: 'csstable', component: CsstableComponent},
  { path: 'position', component: PositionComponent},
  { path: 'overflow', component: OverflowComponent},
  { path: 'floatinlineblock', component: FloatinlineblockComponent},
  { path: 'align', component: AlignComponent},
  { path: 'navigationbar', component: NavigationbarComponent},
  { path: 'dropdowns', component: DropdownsComponent},
  { path: 'javahome', component: JavahomeComponent},
  { path: 'jsintro', component: JsintroComponent},
  { path: 'jswhereto', component: JswheretoComponent},
  { path: 'comment', component: CommentComponent},
  { path: 'jsstatement', component: JsstatementComponent},
  { path: 'jsvariables', component: JsvariablesComponent},
  { path: 'jsoperators', component: JsoperatorsComponent},
  { path: 'jsfunctions', component: JsfuntionsComponent},
  { path: 'jsobjects', component: JsobjectsComponent},
  { path: 'jsevents', component: JseventsComponent},
  { path: 'jsstrings', component: JsstringsComponent},
  { path: 'jsarrays', component: JsarraysComponent},
  { path: 'jsdats', component: JsdatsComponent},
  { path: 'jsboolean', component: JsbooleanComponent},
  { path: 'jsforloop', component: JsforloopComponent},
  { path: 'jswhileloop', component: JswhileloopComponent},
  { path: 'jsbreakpoint', component: JsbreakpointComponent},
  { path: 'debuggin', component: DebugginComponent},
  { path: 'jason', component: JasonComponent},
  { path: 'exercise', component: ExerciseComponent},
  { path: 'cssexercise', component: CssexerciseComponent},
  { path: 'javaexercise', component: JavaexerciseComponent},
  { path: 'policy', component: PrivacypolicyComponent},

  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
