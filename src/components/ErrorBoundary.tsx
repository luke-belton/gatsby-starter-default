import React from 'react';
import Bugsnag from '@bugsnag/browser';
import BugsnagPluginReact, {
  BugsnagPluginReactResult,
} from '@bugsnag/plugin-react';

const apiKey = '179d61c152c499b4f922e45508588d57'; // process.env.BUGSNAG_KEY || '';
const ACTIVE_ENV = process.env.DEPLOY_ENV || 'development';

Bugsnag.start({
  apiKey,
  plugins: [new BugsnagPluginReact()],
  releaseStage: ACTIVE_ENV,
  enabledReleaseStages: ['development', 'production'],
});

const BugsnagPlugin = Bugsnag.getPlugin(
  'react',
) as BugsnagPluginReactResult;

const ErrorBoundary =
  BugsnagPlugin.createErrorBoundary(React);

Bugsnag.notify(new Error('Oops'));

export default ErrorBoundary;