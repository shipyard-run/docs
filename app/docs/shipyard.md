---
sidebar_position: 2
---


<TerminalVisor>
  <Terminal target="tools.container.shipyard.run" shell="/bin/bash" workdir="/" user="root" id="tools" name="Tools"/>
</TerminalVisor>

## Accessing the Consul UI

To open the Consul UI click this link to open the UI in your browser.

<p><a href="https://1-consul-server.container.shipyard.run:8501/ui/vms/services" target="_blank">https://1-consul-server.container.shipyard.run:8501/ui/vms/services</a></p>

<TerminalRunCommand target="tools">
  <Command>clear</Command>
  <Command>kubectl get pods --all-namespaces</Command>
</TerminalRunCommand>

## VSCode example components

<VSCodeTerminal target="tools">
  <Command>clear&#123;name}}</Command>
  <Command>kubectl get pods --all-namespaces</Command>
</VSCodeTerminal>
