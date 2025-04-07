import panel as pn
from .dashboard import Dashboard
from .home_tab import HomeTab
from .program_tab import ProgramTab
from .hardware_tab import HardwareTab
from .monitor_tab import MonitorTab
from .schedule_tab import ScheduleTab

class Interface(Dashboard):
    """A class to instantiate and manage all REACHER dashboard tabs."""

    def __init__(self) -> None:
        """Initialize the Interface with all tab instances.

        **Description:**
        - Extends Dashboard to create and organize all tab components.
        - Sets up the tabbed interface with Home, Program, Hardware, Monitor, and Schedule tabs.
        """
        super().__init__()
        self.home_tab = HomeTab()
        self.program_tab = ProgramTab()
        self.hardware_tab = HardwareTab()
        self.monitor_tab = MonitorTab()
        self.schedule_tab = ScheduleTab()
        self.dashboard = pn.Tabs(
            ("Home", self.home_tab.layout()),
            ("Program", self.program_tab.layout()),
            ("Hardware", self.hardware_tab.layout()),
            ("Monitor", self.monitor_tab.layout()),
            ("Schedule", self.schedule_tab.layout()),
            tabs_location="left",
        )

    """
    **Contact:**
    - For inquiries or support, please email: [thejoshbq@proton.me](mailto:thejoshbq@proton.me).
    """