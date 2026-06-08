import { FullConfig, Suite, Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import fs from 'fs';
import path from 'path';

class CustomReporter implements Reporter {

  onBegin(config: FullConfig, suite: Suite) {
    console.log(`🚀 Test run started with ${suite.allTests().length} tests`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const status = result.status.toUpperCase();
    console.log(`➡ ${test.title} — ${status}`);
  }

  onEnd() {
    console.log('🎉 Test run completed');
  }
}

export default CustomReporter;
