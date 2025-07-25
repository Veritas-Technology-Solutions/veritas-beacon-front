
import React from "react";
import ProjectDialogEMS from "./dialogs/ProjectDialogEMS";
import ProjectDialogVeritasValue from "./dialogs/ProjectDialogVeritasValue";
import ProjectDialogNarcTrack from "./dialogs/ProjectDialogNarcTrack";
import ProjectDialogEventRisk from "./dialogs/ProjectDialogEventRisk";
import ProjectDialogCertTrack from "./dialogs/ProjectDialogCertTrack";
import ProjectDialogElevate from "./dialogs/ProjectDialogElevate";
import ProjectDialogNexus from "./dialogs/ProjectDialogNexus";
import ProjectDialogWebStudio from "./dialogs/ProjectDialogWebStudio";

interface ProjectDialogProps {
  selectedProject: number | null;
}

const ProjectDialog = ({ selectedProject }: ProjectDialogProps) => {
  if (selectedProject === null) return null;
  if (selectedProject === 0) return <ProjectDialogEMS />;
  if (selectedProject === 1) return <ProjectDialogVeritasValue />;
  if (selectedProject === 2) return <ProjectDialogNarcTrack />;
  if (selectedProject === 3) return <ProjectDialogEventRisk />;
  if (selectedProject === 4) return <ProjectDialogCertTrack selectedProject={selectedProject} />;
  if (selectedProject === 5) return <ProjectDialogElevate />;
  if (selectedProject === 6) return <ProjectDialogNexus />;
  if (selectedProject === 7) return <ProjectDialogWebStudio />;
  return null;
};

export default ProjectDialog;
