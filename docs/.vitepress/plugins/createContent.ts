
export default function createContent (): Plugin {
    return {
      name: 'vite-plugin-vitepress-auto-sidebar',
      configureServer ({
        watcher,
        restart
      }: ViteDevServer) {
        const fsWatcher = watcher.add('*.md');
        fsWatcher.on('all', async (event, path) => {
          if (event !== 'change') {
            log(`${event} ${path}`);
            try {
              await restart();
              log('update sidebar...');
            } catch {
              log(`${event} ${path}`);
              log('update sidebar failed');
            }
          }
        });
      },
      config (config) {
        option = opt;
        const { path = '../docs' } = option;
        // increment ignore item
        const docsPath = join(process.cwd(), path);
        console.log('docsPath',docsPath);
        
        // create sidebar data and insert
        (config as UserConfig).vitepress.site.themeConfig.sidebar =
          createSidebarMulti(docsPath);
        log('injected sidebar data successfully');
        return config;
      }
    };
  }