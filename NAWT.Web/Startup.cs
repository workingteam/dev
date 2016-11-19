using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NotAWorkingTeam.Startup))]
namespace NotAWorkingTeam
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
