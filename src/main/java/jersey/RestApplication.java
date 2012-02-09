package jersey;

import com.google.common.collect.ImmutableSet;

import javax.ws.rs.core.Application;
import java.util.Set;

public class RestApplication extends Application {
   @Override
   public Set<Class<?>> getClasses() {
      return ImmutableSet.<Class<?>>of(
         TestResource.class
      );
   }
}
