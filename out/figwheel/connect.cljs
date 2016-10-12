(ns figwheel.connect (:require [figwheel.client] [lab-notebook.core]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

