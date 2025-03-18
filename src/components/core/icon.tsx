/* eslint-disable no-console */

import React, { forwardRef } from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import { icons as lucidIcons } from "lucide-react";
import BigsurfDocs from "public/icons/bigsurf/docs.svg";
import BigsurfMessage from "public/icons/bigsurf/message.svg";
import BigsurfNotes from "public/icons/bigsurf/notes.svg";
import BigsurfPhotos from "public/icons/bigsurf/photos.svg";
//
import DEVBabel from "public/icons/developer/babel.svg";
import DEVBootstrap5 from "public/icons/developer/bootstrap5.svg";
import DEVChrome from "public/icons/developer/chrome.svg";
import DEVCSS3 from "public/icons/developer/css3.svg";
import DEVDocker from "public/icons/developer/docker.svg";
import DEVExpressJs from "public/icons/developer/expressjs.svg";
import DEVFigma from "public/icons/developer/figma.svg";
import DEVFirebase from "public/icons/developer/firebase.svg";
import DEVGit from "public/icons/developer/git.svg";
import DEVGitHub from "public/icons/developer/github.svg";
import DEVGulp from "public/icons/developer/gulp.svg";
import DEVHTML5 from "public/icons/developer/html5.svg";
import DEVJavaScript from "public/icons/developer/javascript.svg";
import DEVJQuery from "public/icons/developer/jquery.svg";
import DEVMongoDB from "public/icons/developer/mongodb.svg";
import DEVNextJs from "public/icons/developer/nextjs.svg";
import DEVNodeJs from "public/icons/developer/nodejs.svg";
import DEVPostgreSQL from "public/icons/developer/postgresql.svg";
import DEVPrisma from "public/icons/developer/prisma.svg";
import DEVReact from "public/icons/developer/reactjs.svg";
import DEVSass from "public/icons/developer/sass.svg";
import DEVSupabase from "public/icons/developer/supabase.svg";
import DEVTailwindCSS from "public/icons/developer/tailwindcss.svg";
import DEVTypeScript from "public/icons/developer/typescript.svg";
import DEVViteJS from "public/icons/developer/vitejs.svg";
import DEVVisualStudioCode from "public/icons/developer/vscode.svg";
import DEVWebpack from "public/icons/developer/webpack.svg";

export const icons = {
  ...lucidIcons,
  DEVBootstrap5,
  DEVHTML5,
  DEVCSS3,
  DEVChrome,
  DEVSass,
  DEVTailwindCSS,
  DEVJavaScript,
  DEVTypeScript,
  DEVJQuery,
  DEVReact,
  DEVNextJs,
  DEVExpressJs,
  DEVFirebase,
  DEVNodeJs,
  DEVPrisma,
  DEVSupabase,
  DEVMongoDB,
  DEVPostgreSQL,
  DEVFigma,
  DEVBabel,
  DEVGulp,
  DEVWebpack,
  DEVViteJS,
  DEVGit,
  DEVGitHub,
  DEVVisualStudioCode,
  DEVDocker,
  //
  BigsurfMessage,
  BigsurfPhotos,
  BigsurfNotes,
  BigsurfDocs,
};

export type IconTypes = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  icon: IconTypes;
  label?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { icon, label, ...rest } = props;
  const IconEle = icons[icon];

  if (!IconEle) {
    console.warn(`Icon "${icon}" does not exist in the icon libraries.`);
    return null;
  }

  return (
    <React.Fragment>
      <IconEle ref={ref} aria-hidden={true} focusable={false} {...rest} />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </React.Fragment>
  );
});

Icon.displayName = "Icon";

export default Icon;
