import React from "react";
import webguidelines from "../css/webguidelines.css";

export default function Webguidelines() {
    return (
      <div>
        <header>
            <h1>Web guidelines</h1>
        </header>
        <main>
          <div className="guidelines-border">
          <p>WCAG 3.3.4 (AA): Provide the ability to undo, correct, or confirm important transactions: not applicable based on the code</p>
            <p>WCAG 2.4.1 (A): Allow skipping of repetitive content: not applicable based on the code</p>
            <p>WCAG 2.2.1 (A): Allow adjustment of time limits: not applicable based on the code</p>
            <p>WCAG 1.4.2 (A): Allow pausing, stopping, or lowering audio: not applicable based on the code</p>
            <p>WCAG 2.2.2 (A): Allow pausing or stopping of movements: not applicable based on the code</p>
            <p>WCAG 2.5.2 (A): Allow undoing clicks: not applicable based on the code</p>
            <p>WCAG 2.4.7 (AA): Make visible what is in focus: not applicable based on the code</p>
            <p>WCAG 1.3.3 (A): Do not make instructions dependent on sensory characteristics: not applicable based on the code</p>
            <p>WCAG 2.4.3 (A): Have a meaningful focus order: content is logically and organizedly placed</p>
            <p>WCAG 3.2.1 (A): No change of context on focus: not applicable based on the code</p>
            <p>WCAG 2.1.2 (A): No keyboard trap: not applicable based on the code</p>
            <p>WCAG 1.4.13 (AA): Content displayed on hover or focus: Popups can be closed.</p>
            <p>WCAG 3.2.4 (AA): Consistent naming: all buttons have clear and logical names.</p>
            <p>WCAG 2.3.1 (A): Do not cause epileptic seizures through flashing: not applicable based on the code</p>
            <p>WCAG 1.3.2 (A): Present content in a meaningful order: not applicable based on the code</p>
            <p>WCAG 1.4.12 (AA): Ensure spacing between characters, lines, paragraphs, and words can be increased: no text is obscured or overlapped, but there is enough space for readability.</p>
            <p>WCAG 4.1.3 (A): Ensure assistive technologies can present messages that are not in focus: not applicable based on the code</p>
            <p>WCAG 1.3.4 (AA): Ensure content adapts to the screen's orientation: applied in the code</p>
            <p>WCAG 4.1.2 (A): Ensure components work with assistive technologies: not applicable based on the code</p>
            <p>WCAG 1.4.4 (A): Ensure text can be enlarged: not applicable as some content is obscured and becomes difficult to access</p>
            <p>WCAG 2.5.3 (A): Ensure text on buttons and controls matches machine-readable names: not applicable based on the code, as voice control tools are not available</p>
            <p>WCAG 1.4.10 (AA): Create a flexible layout that works when enlarged or on a small screen: applied</p>
            <p>WCAG 3.3.2 (A): Provide clear field labels/texts: it is clear and logical what needs to be filled in the form.</p>
            <p>WCAG 2.4.6 (AA): Write descriptive headings and texts: there are clear and logical headings.</p>
            <p>WCAG 2.4.2 (A): Write descriptive page titles: there are clear page titles.</p>
            <p>WCAG 2.4.4 (A): Write clear links: there are clear links with reasonably short text.</p>
            <p>WCAG 1.2.3 (A): Provide alternatives or captions for video recordings: not applicable based on the code, as there are no videos on the page.</p>
            <p>WCAG 1.2.5 (AA): Provide captions for video recordings: not applicable based on the code, as there are no videos on the page.</p>
            <p>WCAG 1.2.2 (A): Provide captions for audio in recorded movies: not applicable based on the code, as there are no videos on the page.</p>
            <p>WCAG 3.2.2 (A): Avoid unexpected changes during input: not applicable based on the code, as the only input is the form and since the page is dynamic, nothing unexpected can happen.</p>
            <p>WCAG 2.1.4 (A): Be cautious with keyboard shortcuts: not applicable based on the code, as there are no keyboard shortcuts.</p>
            <p>WCAG 3.2.3 (AA): Be consistent in navigation: applied, as there is a consistent navigation bar.</p>
            <p>WCAG 3.3.1 (A): Indicate where an error has occurred and describe it clearly: not applicable based on the code, as there are no error messages and the form is not interactive.</p>
            <p>WCAG 2.1.1 (A): All functionality must be operable through a keyboard: not applicable to the code.</p>
            <p>WCAG 3.1.1 (A): Specify the language of the page in the code: applied to all pages. All pages contain the same language.</p>
            <p>WCAG 3.1.2 (AA): Specify language changes in the code: applied to all pages. All pages contain the same language.</p>
            <p>WCAG 1.3.5 (AA): Specify the purpose of form fields in the code: applied. It is clear what should be entered in the form.</p>
            <p>WCAG 1.4.1 (A): Do not use color alone to convey information: applied, as there is good contrast between text and background color, due to the border around the text. However, there are no icons or symbols.</p>
            <p>WCAG 1.4.5 (AA): Use text, not images of text, to convey information: applied. There are no images of text on the website.</p>
            <p>WCAG 1.4.11 (AA): Use sufficient contrast in components and graphics: applied. There is clear contrast, allowing the content to be visible.</p>
            <p>WCAG 1.4.3 (AA): Use sufficient contrast between text and background: applied. There is clear contrast between text and background.</p>
            <p>WCAG 1.1.1 (A): Provide text descriptions for all non-text content: applied. There are texts for all images.</p>
            <p>WCAG 1.2.1 (A): Provide alternatives for recordings consisting only of audio or video: not applicable to the code, as there are no recordings.</p>
            <p>WCAG 2.5.1 (A): Provide alternatives for complex finger or gesture movements: not applicable based on the code, as there are no assistive tools.</p>
            <p>WCAG 2.5.4 (A): Provide alternatives for motion control: not applicable based on the code, as there are no assistive tools.</p>
            <p>WCAG 2.4.5 (A): Provide multiple ways to navigate: not applicable based on the code, as there is only a consistent navigation menu at the top of the website.</p>
            <p>WCAG 1.3.1 (A): Convey information, structure, and relationships in the code: applied, as there are various HTML elements such as headers, lists, and links.</p>
            <p>WCAG 3.3.3 (AA): Provide suggestions on how errors can be corrected: not applicable based on the code, as there are no error messages.</p>
            <p>EN 5.2, 11.6: Make accessibility features easy to find: not applicable based on the code, as there are no accessibility features like keyboard commands.</p>
            <p>EN 5.3: Do not rely on services dependent on only one biometric characteristic: not applicable based on the code, as the website does not contain such features.</p>
            <p>EN 11.8: Ensure accessibility support in editing functions: not applicable based on the code, as there is no tool for users to publish or edit content.</p>
            <p>EN 12.2: Ensure accessibility in support services: not applicable based on the code.</p>
            <p>EN 7.1: Subtitle handling technology: not applicable based on the code, as there are no videos.</p>
            <p>EN 7.2, 7.3: Audio description technology: not applicable based on the code, as there are no videos.</p>
            <p>EN 12.1: Accessible product documentation: not applicable based on the code.</p>
            <p>EN 9.6: All accessibility requirements are met: not applicable based on the code.</p>
            <p>EN 6.4, 6.6: Alternatives for audio- and video-based services: not applicable based on the code, as there are no video-based services.</p>
            <p>EN 5.4: Preserve accessibility during conversions: not applicable based on the code.</p>
            <p>EN 6.1, 6.2, 6.3, 6.5: Video and voice call functions should be accessible: not applicable based on the code.</p>
            <p>WCAG 4.1.1 (A): Ensure code validation: applied.</p>
            <p>Ensure good readability for the website: applied, as there is clear contrast between background and text.</p>
            <p>Make links, clickable areas, and menus usable for everyone: applied, as there is a special pointer when hovering over clickable areas.</p>
          </div>
        </main>
      </div>
    );
  }
  